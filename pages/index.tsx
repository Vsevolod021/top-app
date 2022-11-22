import { GetStaticProps } from "next";
import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return <>
        <Htag tag='h1'>Текст</Htag>
        <Button appearance="ghost" arrow="down">Page up</Button>
        <Button appearance="primary" arrow="right">Page up</Button>
        <P size="small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis repellendus quam id? Animi ad ipsam, officia beatae odit in veniam cum sequi modi laudantium asperiores aut distinctio, nulla aliquam repellendus.
        </P>
        <Tag color="red" size="large">hh</Tag>
        <Tag color="green" size="small">hh</Tag>
        <Tag color="primary" size="small">hh</Tag>
        <Tag color="ghost" size="small">hh</Tag>
        <Tag color="gray" size="small" href="https://ya.ru/">hhkasnvjovhsposf</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
        <ul>
            {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
        </ul>
    </>;
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    }
    );
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}