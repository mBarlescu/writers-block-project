require 'test_helper'

class Api::FeedbackLikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feedback_like = feedback_likes(:one)
  end

  test "should get index" do
    get feedback_likes_url, as: :json
    assert_response :success
  end

  test "should create feedback_like" do
    assert_difference('FeedbackLike.count') do
      post feedback_likes_url, params: { feedback_like: { feedback_id: @feedback_like.feedback_id, user_id: @feedback_like.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show feedback_like" do
    get feedback_like_url(@feedback_like), as: :json
    assert_response :success
  end

  test "should update feedback_like" do
    patch feedback_like_url(@feedback_like), params: { feedback_like: { feedback_id: @feedback_like.feedback_id, user_id: @feedback_like.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy feedback_like" do
    assert_difference('FeedbackLike.count', -1) do
      delete feedback_like_url(@feedback_like), as: :json
    end

    assert_response 204
  end
end
