from app import db
from datetime import datetime, timezone


class Blog(db.Model):
    __tablename__ = "blogs"

    id = db.Column(db.Integer, primary_key=True)
    nick_name = db.Column(db.String(255), nullable=False)
    place_name = db.Column(db.String(255), nullable=False)
    points = db.Column(db.JSON, nullable=True)
    more_description = db.Column(db.Text, nullable=True)
    address = db.Column(db.String(255), nullable=True)
    meta_description = db.Column(db.String(100), nullable=True)
    meta_og_description = db.Column(db.String(100), nullable=True)
    meta_keywords = db.Column(db.String(255), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    def __repr__(self):
        return f"<Blog {self.place_name}>"


class BlogImage(db.Model):
    __tablename__ = "blog_images"

    id = db.Column(db.Integer, primary_key=True)
    blog_id = db.Column(db.Integer, db.ForeignKey("blogs.id"), nullable=False)
    row = db.Column(db.Integer, nullable=False, unique=True)
    image_url = db.Column(db.String(255), nullable=False)

    blog = db.relationship("Blog", backref=db.backref("images", lazy=True))

    def __repr__(self):
        return f"<BlogImage {self.image_url}>"


class StudentVoice(db.Model):
    __tablename__ = "student_voices"

    id = db.Column(db.Integer, primary_key=True)
    blog_id = db.Column(db.Integer, db.ForeignKey("blogs.id"), nullable=False)
    row = db.Column(db.Integer, nullable=False, unique=True)
    academic_year = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)

    blog = db.relationship("Blog", backref=db.backref("voices", lazy=True))

    def __repr__(self):
        return f"<StudentVoice {self.academic_year}>"
