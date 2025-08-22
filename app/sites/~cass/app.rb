require 'sinatra/base'

module Sites
  module Cass
    class App < Sinatra::Base
      set :views, File.join(File.dirname(__FILE__), 'views')
      set :public_folder, File.join(File.dirname(__FILE__), '..', 'public', 'sites', '~cass')
      
      get '/' do
        erb :index
      end

    end
  end
end