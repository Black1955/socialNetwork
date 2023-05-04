import { FC } from "react";
import AddBlogList from "../../components/AddBlogList/AddBlogList";
import Avatar from "../../ui/Avatar/Avatar";
import styles from './Home.module.scss'
import avatar from '../../assets/person.png'
import Posts from "../../components/Posts/Posts";
import RecommendedBlog from "../../ui/RecommendedBlog/RecommendedBlog";
import Post from "../../components/Post/Post";

const Home:FC = () => {

     const tabs = [
        {
          text: "For you",
          name: "For you",
          value: "For you",
          onChange: (arg: any) => {},
        },
        {
          text: "Popular",
          name: "Popular",
          value: "Popular",
          onChange: (arg: any) => {},
        },
        {
          text: "New",
          name: "New",
          value: "New",
          onChange: (arg: any) => {},
        },
        {
          text: "Your tags",
          name: "Your tags",
          value: "Your tags",
          onChange: (arg: any) => {},
        },
      ];
      const mockPosts = [
        {
          id: "1",
          name: "Post 1",
          description: "Description of post 1",
          likes: 10,
          imgUrl: "https://worldinsidepictures.com/wp-content/uploads/2014/03/328.jpg",
          time: "2 hours ago",
          liked: false,
          comented: false,
          folowed: false,
          coments: [],
        },
        {
          id: "4",
          name: "Post 4",
          description: "Description of post 4",
          likes: 40,
          imgUrl: "https://img.freepik.com/premium-photo/jaguar-is-jungle-with-green-background_867452-2179.jpg",
          time: "4 hours ago",
          liked: true,
          comented: false,
          folowed: true,
          coments: [],
        },
        {
          id: "3",
          name: "Post 5",
          description: "Description of post 4",
          likes: 40,
          imgUrl: "https://img.freepik.com/free-photo/animal-nature-feline-mammal-undomesticated-cat-animals-in-the-wild-bengal-tiger-generative-ai_188544-9405.jpg",
          time: "4 hours ago",
          liked: true,
          comented: false,
          folowed: true,
          coments: [],
        },
      ];


    return (
    <div className={styles.wrapper}>

        <div className={styles.left}>
            <div className={styles.blockAdd}>
                <div className={styles.mr}>
                  <Avatar width={70} height={70} url={avatar}/>  
                </div>
               
                <AddBlogList/> 
            </div>
            <Posts tabs={tabs} posts={mockPosts} />
        </div>   
        <div className={styles.right}>
            <div>
              <h2 className={styles.title}>Check out this blogs</h2>
              <div>
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis" />
                </div>
               
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis"/>
                </div>
                <div className={styles.blog}>
                   <RecommendedBlog userName="Maks" desc="My manager Denis"/>
                </div>
              </div>
            </div>
            <div>
            <h2 className={styles.title2}>Recomended for you</h2>
              <div>
                <div className={styles.blog}>
                  <Post id='5' name='Hooray' description='Description of post 4' likes={40} liked={false}  imgUrl= "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?cs=srgb&dl=pexels-alex-andrews-2295744.jpg&fm=jpg" time= "2 hours ago" comented = {false} folowed= {false} coments= {[]} />
                </div>
               
                
              </div>
            </div>
        </div>
            
    </div>
    )
}

export default Home;