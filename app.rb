require 'bundler/setup'
require 'sinatra'

Tilt.register Tilt::ERBTemplate, 'html.erb'

set :public_folder, File.join(File.dirname(__FILE__), 'public')
set :views, File.join(File.dirname(__FILE__), 'public')
set :static, true

get '/' do
  erb :index
end
