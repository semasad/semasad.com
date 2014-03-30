json.array!(@contents) do |content|
  json.extract! content, :id, :text
  json.url content_url(content, format: :json)
end
