from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FieldList, FormField
from wtforms.validators import DataRequired, Length, Optional


class AdminBlogStudentVoiceForm(FlaskForm):
    # id = IntegerField('ID', validators=[DataRequired()])
    academic_year = StringField(
        "Academic Year", validators=[DataRequired(), Length(max=4)]
    )
    description = StringField("Description", validators=[DataRequired()])


class AdminBlogDataForm(FlaskForm):
    # id = IntegerField('ID', validators=[DataRequired()])
    nick_name = StringField("Nick Name", validators=[DataRequired()])
    place_name = StringField("Place Name", validators=[DataRequired()])
    # points = FieldList(StringField("Point", validators=[DataRequired()]), min_entries=1)
    more_description = StringField("More Description", validators=[DataRequired()])
    # student_voices = FieldList(FormField(AdminBlogStudentVoiceForm), min_entries=1)
    address = StringField("Address", validators=[DataRequired()])
    meta_description = StringField("Meta Description", validators=[DataRequired()])
    meta_og_description = StringField(
        "Meta OG Description", validators=[DataRequired()]
    )
    meta_keywords = StringField("Meta Keywords", validators=[DataRequired()])
