/* eslint-disable */

import TextCard from "../components/TextCard";
import {useState} from 'react';
import { about_contents } from "../data/about_contents";

function About() {

    let [contents, setContents] = useState(about_contents);

    return (
        <div className="Card-wrapper">
            {contents.map(function (md, i) {
                    return <TextCard i={i} contents={contents}></TextCard>;
                  })}
        </div>

    )
}

export default About;