require 'test_helper'

class SocialsControllerTest < ActionController::TestCase
  setup do
    @social = socials(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:socials)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create social" do
    assert_difference('Social.count') do
      post :create, social: { color: @social.color, link: @social.link, name: @social.name }
    end

    assert_redirected_to social_path(assigns(:social))
  end

  test "should show social" do
    get :show, id: @social
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @social
    assert_response :success
  end

  test "should update social" do
    patch :update, id: @social, social: { color: @social.color, link: @social.link, name: @social.name }
    assert_redirected_to social_path(assigns(:social))
  end

  test "should destroy social" do
    assert_difference('Social.count', -1) do
      delete :destroy, id: @social
    end

    assert_redirected_to socials_path
  end
end
