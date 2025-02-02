export type BookTile = {
    cover: string;
    title: string;
    author: string;
    date: string;
    published: string;
    series?: string;
    yearReviewed: number;
};

export type BookReview = BookTile & {
    content: string;
};

const reviewLibrary: BookReview[] = [];

export const liesOfLockeLamora: BookReview = {
    cover: `./covers/lies_of_locke_lamora_600x600bb.jpg`,
    title: "Lies of Locke Lamora",
    author: "Scott Lynch",
    published: "January 1st 2000",
    date: "January 24th 2024",
    series: "The Gentleman Bastards",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(liesOfLockeLamora);

const stormFront: BookReview = {
    cover: `${process.env.PUBLIC_URL}/covers/storm_front_600x600bb.jpg`,
    title: "Storm Front",
    author: "Jim Butcher",
    published: "April 1 2000",
    date: "January 24th 2024",
    series: "Dresden Files",
    yearReviewed: 2024,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(stormFront);

const foolMoon: BookReview = {
    cover: `${process.env.PUBLIC_URL}/covers/fool_moon_600x600bb.jpg`,
    title: "Fool Moon",
    author: "Jim Butcher",
    published: "January 1st 2001",
    date: "January 24th 2024",
    series: "Dresden Files",
    yearReviewed: 2024,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(foolMoon);

const gravePeril: BookReview = {
    cover: `${process.env.PUBLIC_URL}/covers/grave_peril_600x600bb.jpg`,
    title: "Grave Peril",
    author: "Jim Butcher",
    published: "September 1st 2001",
    date: "January 24th 2024",
    series: "Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(gravePeril);

const summerKnight: BookReview = {
    cover: `${process.env.PUBLIC_URL}/covers/summer_knight_600x600bb.jpg`,
    title: "Summer Knight",
    author: "Jim Butcher",
    published: "September 3rd 2002",
    date: "January 24th 2024",
    series: "Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(summerKnight);

const deathMasks: BookReview = {
    cover: `${process.env.PUBLIC_URL}/covers/death_masks_600x600bb.jpg`,
    title: "Death Masks",
    author: "Jim Butcher",
    published: "August 5th 2003",
    date: "January 24th 2024",
    series: "Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(deathMasks);

export default reviewLibrary;
