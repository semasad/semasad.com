json.array!(@socials) do |social|
  json.extract! social, :id, :name, :link, :color
  json.url social_url(social, format: :json)
end
