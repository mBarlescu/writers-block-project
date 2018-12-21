require 'test_helper'

class RelationshipsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @relationship = relationships(:one)
  end

  test "should get index" do
    get relationships_url, as: :json
    assert_response :success
  end

  test "should create relationship" do
    assert_difference('Relationship.count') do
      post relationships_url, params: { relationship: { created_at: @relationship.created_at, follower_id: @relationship.follower_id, following_id: @relationship.following_id, updated_at: @relationship.updated_at } }, as: :json
    end

    assert_response 201
  end

  test "should show relationship" do
    get relationship_url(@relationship), as: :json
    assert_response :success
  end

  test "should update relationship" do
    patch relationship_url(@relationship), params: { relationship: { created_at: @relationship.created_at, follower_id: @relationship.follower_id, following_id: @relationship.following_id, updated_at: @relationship.updated_at } }, as: :json
    assert_response 200
  end

  test "should destroy relationship" do
    assert_difference('Relationship.count', -1) do
      delete relationship_url(@relationship), as: :json
    end

    assert_response 204
  end
end
