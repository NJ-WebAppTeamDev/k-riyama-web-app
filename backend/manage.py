from app import db
from app.models import Blog, BlogImage, StudentVoice
from flask.cli import AppGroup

seed_cli = AppGroup("seed")


@seed_cli.command("all")
def seed():
    """Seed the database with initial data."""
    try:
        blog1 = Blog(
            nick_name="世界一の星空",
            place_name="郡山駅前",
            points=[
                "食品・日用品から本・家電まで、何でも揃うお店の充実度",
                "ギネスにのったプラネタリウム",
            ],
            more_description="郡山駅は、福島の東西南北をつなぐ～（郡山駅の説明）\nまた、駅中・駅周辺の商業施設も充実している．例えば、駅中には～（「」）\nさらに、駅隣の大きなビル「ビックアイ」の最上階には、世界一の高さ（104.25m）にあるプラネタリウムとしてギネス認定された「郡山市ふれあい科学館スペースパーク」のプラネタリウムがある．～",
            address="福島県郡山市駅前２丁目１１−１",
            meta_description="世界一の星空こと郡山駅前の情報をわかり易く解説しています。学生向けの郡山Webアプリ、閲覧するとスタンプがもらえます。",
            meta_og_description="世界一の星空こと郡山駅前の情報をわかり易く解説しています。学生向けの郡山Webアプリ、閲覧するとスタンプがもらえます。",
            meta_keywords="世界一の星空,郡山駅前,福島県",
        )

        db.session.add(blog1)
        db.session.commit()

        blog1_image1 = BlogImage(blog_id=blog1.id, image_url="/images/image1.jpg")
        blog1_image2 = BlogImage(blog_id=blog1.id, image_url="/images/image2.jpg")

        blog1_voice1 = StudentVoice(
            blog_id=blog1.id,
            academic_year="情報工学科 学部1年",
            description="郡山駅前は、学生にとってのメッカです。",
        )
        blog1_voice2 = StudentVoice(
            blog_id=blog1.id,
            academic_year="情報工学科 学部2年",
            description="学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント学生から見た施設のおすすめポイント。",
        )

        db.session.add(blog1_image1)
        db.session.add(blog1_image2)
        db.session.add(blog1_voice1)
        db.session.add(blog1_voice2)
        db.session.commit()
        print("Database seeded successfully!")
    except Exception as e:
        db.session.rollback()
        print(f"An error occurred while seeding the database: {e}")


if __name__ == "__main__":
    seed()
