# for dev
require 'rack/static'
use Rack::Static, :urls => ["/assets", "/sites"], :root => File.join(File.dirname(__FILE__), "..", "public")

# Mount the main site
require_relative 'app'
map '/' do
  run Sinatra::Application
end

# ~cass
require_relative 'sites/~cass/app'
map '/~cass' do
  run Sites::Cass::App
end


