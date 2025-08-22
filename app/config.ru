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


