class AddUserAndMetricIdsToRatings < ActiveRecord::Migration[5.2]
  def change
    add_column :ratings, :user_id, :integer
    add_column :ratings, :metric_id, :integer
  end
end
