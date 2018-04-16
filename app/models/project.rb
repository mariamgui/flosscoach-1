class Project < ApplicationRecord
  validates_presence_of :name
  validates_uniqueness_of :name
  validates_presence_of :description

  belongs_to :user
  has_many :widgets, :dependent => :destroy
  has_and_belongs_to_many :owners, class_name: 'User'
  has_one :forum
 
  has_many :favoriter_projects
  has_many :fans, through: :favoriter_projects, :source => :user
  has_many :comments, through: :widgets
  #mount_uploader :avatar, AvatarUploader
  
  scope :order_by_fans_count, -> {
  joins(:fans).select('projects.*, COUNT(user_id) as user_count').group('projects.id').order('user_count DESC')
  }
  #PaperClip related code:
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates :image, file_size: { less_than: 3.megabytes }
  serialize :tags unless Rails.env.production?

  def get_open_hub_data
    ohp = OpenHubProject.find_by_name(self.name)
    self.description = ohp.description
    self.open_hub_image_url = ohp.logo_url
    self.use_open_hub_data = true
    self.use_open_hub_image = true
    self.tags = ohp.tags
    widget = self.widgets.where(title: "About the project").first
    widget.content = ohp.iframe_html
    widget.save

    widget = self.widgets.where(title: "Resources avaiable").first
    widget.content = ohp.links_html
    widget.save

    widget = self.widgets.where(title: "Technical skills required").first
    widget.content = ohp.iframe_languages_html
    widget.save

  end
  def recent?
    created_at > 2.day.ago
  end

  def owner?(user)
    self.owners.include?(user)
  end

  def self.search(search)
    if search
      where("name LIKE ? OR description LIKE ? OR cast(tags as text) LIKE ?", "%#{search}%", "%#{search}%", "%#{search}%")
    else
      all
    end
  end
end
