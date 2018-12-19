require 'test_helper'

class Api::StoriesLikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stories_like = stories_likes(:one)
  end

  test "should get index" do
    get stories_likes_url, as: :json
    assert_response :success
  end

  test "should create stories_like" do
    assert_difference('StoriesLike.count') do
      post stories_likes_url, params: { stories_like: { story_id: @stories_like.story_id, user_id: @stories_like.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show stories_like" do
    get stories_like_url(@stories_like), as: :json
    assert_response :success
  end

  test "should update stories_like" do
    patch stories_like_url(@stories_like), params: { stories_like: { story_id: @stories_like.story_id, user_id: @stories_like.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy stories_like" do
    assert_difference('StoriesLike.count', -1) do
      delete stories_like_url(@stories_like), as: :json
    end

    assert_response 204
  end
end
