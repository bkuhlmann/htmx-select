# frozen_string_literal: true

require "rack_helper"

RSpec.describe "Demo", :js do
  using Refinements::Pathname

  subject :app do
    Rack::Static.new proc { [200, {"Content-Type" => "text/html"}, ["<h1>Demo</h1>"]] },
                     {
                       root: app_path,
                       urls: app_path.files.map { |path| "/#{path.basename}" }
                     }
  end

  let(:app_path) { Bundler.root.join "tmp/test" }

  before do
    app_path.rmtree.mkpath
    Bundler.root.join("demo").files.each { |path| path.copy app_path }
    Bundler.root.join("lib/htmx-select.js").copy app_path
    Capybara.app = app
  end

  it "loads demonstration" do
    visit "/index.html"
    expect(page).to have_content("Demonstration")
  end

  it "selects version" do
    visit "/index.html"
    select "0.0.0", from: "Version"

    expect(page).to have_content("Version 0.0.0")
  end
end
