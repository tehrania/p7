get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.
  content_type :JSON
  cell= "#{rand(0∂..9)}"
  color= "#" + "%06x" % (rand * 0xffffff)
  color.to_s
  {color: color, cell: cell}.to_json

end

