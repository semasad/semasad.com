class IndexController < ApplicationController

  # GET /skills
  # GET /skills.json
  # GET /contents
  # GET /contents.json
  # GET /socials
  # GET /socials.json
  def index
    @skills = Skill.all
    @contents = Content.all
    @socials = Social.all
  end

end
