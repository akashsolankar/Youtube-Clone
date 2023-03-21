import React from "react";
import "./Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

function Videos() {
    return (
        <div className="videos">
            <Filter />
            <div className="row">
                <SingleVideo 
                thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA" 
                profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
                title="React Full Course 2022"
                channel_name="Simplilearn"
                video_duration="5:33:29"
                />
                <SingleVideo 
                video link="https://youtu.be/doSFDItcQrk"
                thumb_img="https://i.ytimg.com/vi/doSFDItcQrk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBavOCtA0hPpXE6iLuWUTPKZPaeqg" 
                profile_img="https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj"
                title="How to Prepare for Placements & Internships in 4 months"
                channel_name="Apna Collage"
                video_duration="15:29"
                />
                <SingleVideo 
                video link="https://youtu.be/Fwd_Dl_vi98"
                thumb_img="https://i.ytimg.com/vi/Fwd_Dl_vi98/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2B-9XVdko-w2l_1Zk96kQAVRjAw" 
                profile_img="https://yt3.ggpht.com/ytc/AL5GRJXeSxuuUtPjW5-D_QnHZSSAHMox7XEYLt_XD7MW8Q=s68-c-k-c0x00ffffff-no-rj"
                title="“I am waiting for a big opportunity in life but nothing’s happening”"
                channel_name="Learn English"
                video_duration="14:47"
                />
                <SingleVideo 
                video link="https://youtu.be/UnP1wj0KtKo"
                thumb_img="https://i.ytimg.com/vi/UnP1wj0KtKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHZX0LLkSEJtRUK1GkVoPmgpXBzQ" 
                profile_img="https://yt3.ggpht.com/D2rVY0GIhAZZ_QfIupATCauaxNC45N3JuDY6pqrI75VByFEj3Ey62xdpGTF-OOsGr7kDGlorlg=s68-c-k-c0x00ffffff-no-rj"
                title="NEW Mercedes S-Class: Luxury BEYOND Belief"
                channel_name="Auto Trader"
                video_duration="17:53"
                />
                <SingleVideo 
                video link="https://youtu.be/jqrJKl-W_zk"
                thumb_img="https://i.ytimg.com/an_webp/jqrJKl-W_zk/mqdefault_6s.webp?du=3000&sqp=COmJ558G&rs=AOn4CLCBPwX7btp9kj3R83j7ecXGopAQkQ" 
                profile_img="https://yt3.googleusercontent.com/ytc/AL5GRJUfOfVXNfonbB33lrQOb0d5R5FQVBt87N3BFp1D9Q=s88-c-k-c0x00ffffff-no-rj"
                title="From code to conservation: a nerd's quest for meaning"
                channel_name="TEDx Talks"
                video_duration="15:43"
                />
                <SingleVideo 
                video link="https://youtu.be/6mbwJ2xhgzM"
                thumb_img="https://i.ytimg.com/an_webp/6mbwJ2xhgzM/mqdefault_6s.webp?du=3000&sqp=CMq-558G&rs=AOn4CLB54puV8M3q8BIMofTrNNTS-2jgAw" 
                profile_img="https://yt3.ggpht.com/ytc/AL5GRJX7LBvNaQFl0ODpVbrt2F4ajG_wY0fKpZGsEqi8Jw=s48-c-k-c0x00ffffff-no-rj"
                title="Introduction to HTML, CSS, JavaScript & How websites work? "
                channel_name="CodeWithHarry"
                video_duration="18:26"
                />
                <SingleVideo 
                video link="https://youtu.be/1RKH0oYkjG4"
                thumb_img="https://i.ytimg.com/vi/1RKH0oYkjG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC90mAg51UUK8sVpvThCYFmqj_HFA" 
                profile_img="https://yt3.ggpht.com/ytc/AL5GRJU0PFnWAxWSzDXO0inK4ArxhaFXyLmuyw1swUKR=s48-c-k-c0x00ffffff-no-rj"
                title="Newton School Admission Process | Know everything about Newton School"
                channel_name="Newton School"
                video_duration="27:55"
                />
                <SingleVideo 
                video link="https://youtu.be/UvZYF4x3noY"
                thumb_img="https://i.ytimg.com/an_webp/UvZYF4x3noY/mqdefault_6s.webp?du=3000&sqp=CIyk558G&rs=AOn4CLACD7M8t9QS1Q0rzpZM4CHoOVEIYA" 
                profile_img="https://yt3.googleusercontent.com/mXoDd47FVOMLJc6VtEX5tmz8eB9b_M4pEOmmoLV-0gPfZkh0EQW9M1wm3r1O0hzjHEpStjiH=s88-c-k-c0x00ffffff-no-rj"
                title="Your Complete Guide to Tech Stacks | Right Technology Stack to Use"
                channel_name="Saumya Singh"
                video_duration="16:20"
                />
            </div>
        </div>
    )
}
export default Videos