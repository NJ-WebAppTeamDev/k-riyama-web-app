from app import db
from app.models import Blog, BlogImage, StudentVoice
from flask.cli import AppGroup

seed_cli = AppGroup("seed")


@seed_cli.command("all")
def seed():
    """Seed the database with initial data."""
    try:
        blogs = [
            Blog(
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
            ),
            Blog(
                nick_name="美しい滝",
                place_name="滝の森",
                points=[
                    "美しい景観と静かな環境",
                    "ハイキングコースの充実",
                ],
                more_description="滝の森は自然の美しさを楽しむのに最適な場所です。",
                address="福島県滝の森町",
                meta_description="滝の森の美しい滝と自然環境を紹介しています。",
                meta_og_description="滝の森の美しい滝と自然環境を紹介しています。",
                meta_keywords="滝の森,美しい滝,福島県",
            ),
            Blog(
                nick_name="歴史的な城",
                place_name="白石城",
                points=[
                    "城の歴史と文化",
                    "展望台からの美しい景色",
                ],
                more_description="白石城は歴史的な価値が高く、訪れる価値のある場所です。",
                address="宮城県白石市",
                meta_description="白石城の歴史と美しい景色を紹介しています。",
                meta_og_description="白石城の歴史と美しい景色を紹介しています。",
                meta_keywords="白石城,歴史的な城,宮城県",
            ),
            Blog(
                nick_name="温泉の町",
                place_name="湯の町",
                points=[
                    "多くの温泉宿",
                    "美味しい地元料理",
                ],
                more_description="湯の町は温泉で有名な町で、リラックスするのに最適な場所です。",
                address="群馬県湯の町",
                meta_description="湯の町の温泉と地元料理を紹介しています。",
                meta_og_description="湯の町の温泉と地元料理を紹介しています。",
                meta_keywords="湯の町,温泉,群馬県",
            ),
            Blog(
                nick_name="都市のオアシス",
                place_name="都会の公園",
                points=[
                    "広大な緑地",
                    "多様なレクリエーション施設",
                ],
                more_description="都会の公園は忙しい都市生活からの一時の逃避に最適な場所です。",
                address="東京都新宿区",
                meta_description="都会の公園の緑地とレクリエーション施設を紹介しています。",
                meta_og_description="都会の公園の緑地とレクリエーション施設を紹介しています。",
                meta_keywords="都会の公園,都市のオアシス,東京都",
            ),
            Blog(
                nick_name="美術の街",
                place_name="アートシティ",
                points=[
                    "多くの美術館とギャラリー",
                    "芸術イベントの開催",
                ],
                more_description="アートシティは芸術愛好家にとっての楽園です。",
                address="大阪府アートシティ",
                meta_description="アートシティの美術館とギャラリーを紹介しています。",
                meta_og_description="アートシティの美術館とギャラリーを紹介しています。",
                meta_keywords="アートシティ,美術の街,大阪府",
            ),
            Blog(
                nick_name="自然の宝庫",
                place_name="自然公園",
                points=[
                    "豊かな動植物",
                    "ハイキングとキャンプの楽しさ",
                ],
                more_description="自然公園は自然の中でリフレッシュするのに最適な場所です。",
                address="北海道自然公園",
                meta_description="自然公園の豊かな自然環境を紹介しています。",
                meta_og_description="自然公園の豊かな自然環境を紹介しています。",
                meta_keywords="自然公園,自然の宝庫,北海道",
            ),
            Blog(
                nick_name="食の街",
                place_name="グルメタウン",
                points=[
                    "多様なレストランとカフェ",
                    "地元の食材を使った料理",
                ],
                more_description="グルメタウンは食べ歩きを楽しむのに最適な場所です。",
                address="愛知県グルメタウン",
                meta_description="グルメタウンのレストランと料理を紹介しています。",
                meta_og_description="グルメタウンのレストランと料理を紹介しています。",
                meta_keywords="グルメタウン,食の街,愛知県",
            ),
            Blog(
                nick_name="スポーツの聖地",
                place_name="アスリートパーク",
                points=[
                    "多くのスポーツ施設",
                    "年間を通じたイベント",
                ],
                more_description="アスリートパークはスポーツ好きにはたまらない場所です。",
                address="埼玉県アスリートパーク",
                meta_description="アスリートパークのスポーツ施設とイベントを紹介しています。",
                meta_og_description="アスリートパークのスポーツ施設とイベントを紹介しています。",
                meta_keywords="アスリートパーク,スポーツの聖地,埼玉県",
            ),
        ]

        db.session.add_all(blogs)
        db.session.commit()

        for i, blog in enumerate(blogs):
            blog_images = [
                BlogImage(blog_id=blog.id, image_url=f"/images/blog{i+1}_image1.jpg"),
                BlogImage(blog_id=blog.id, image_url=f"/images/blog{i+1}_image2.jpg"),
            ]
            db.session.add_all(blog_images)

            student_voices = [
                StudentVoice(
                    blog_id=blog.id,
                    academic_year=f"学部{i+1}年",
                    description=f"{blog.place_name}は、学生にとって魅力的な場所です。",
                ),
                StudentVoice(
                    blog_id=blog.id,
                    academic_year=f"学部{i+2}年",
                    description=f"学生から見た{blog.place_name}のおすすめポイント。",
                ),
            ]
            db.session.add_all(student_voices)

        db.session.commit()
        print("Database seeded successfully!")
    except Exception as e:
        db.session.rollback()
        print(f"An error occurred while seeding the database: {e}")


if __name__ == "__main__":
    seed()
