require_relative 'app'

# ~cass

require_relative 'sites/~cass/app'
map '/~cass' do
  run Sites::Cass::App
end

# Mount the main site
map '/' do
  run Sinatra::Application
end
