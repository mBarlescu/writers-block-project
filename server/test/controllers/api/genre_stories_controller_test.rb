require 'test_helper'

class Api::GenreStoriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @genre_story = genre_stories(:one)
  end

  test "should get index" do
    get genre_stories_url, as: :json
    assert_response :success
  end

  test "should create genre_story" do
    assert_difference('GenreStory.count') do
      post genre_stories_url, params: { genre_story: { genre_id: @genre_story.genre_id, story_id: @genre_story.story_id } }, as: :json
    end

    assert_response 201
  end

  test "should show genre_story" do
    get genre_story_url(@genre_story), as: :json
    assert_response :success
  end

  test "should update genre_story" do
    patch genre_story_url(@genre_story), params: { genre_story: { genre_id: @genre_story.genre_id, story_id: @genre_story.story_id } }, as: :json
    assert_response 200
  end

  test "should destroy genre_story" do
    assert_difference('GenreStory.count', -1) do
      delete genre_story_url(@genre_story), as: :json
    end

    assert_response 204
  end
end
