import placeholderReview from "./placeholderReviewContent.ts";

export type BookTile = {
    cover: string;
    title: string;
    author: string;
    date: string;
    published: string;
    series?: Series;
    yearReviewed: number;
};

export type BookReview = {
    cover: string;
    title: string;
    author: string;
    date: string;
    published: string;
    series?: Series;
    yearReviewed: number;
    content: string;
};
type Series =
    | "The Age of Madness"
    | "The Gentleman Bastards"
    | "Dune"
    | "The Empyrean"
    | "Hellboy"
    | "The Expanse"
    | "The Sheperd King"
    | "New Crobuzon"
    | "The First Law"
    | "The Scholomance"
    | "Hierarchy"
    | "The Dresden Files";

const reviewLibrary: BookReview[] = [];

export const aCityOnMars: BookReview = {
    cover: "./covers/a_city_on_mars.jpg",
    title: "A City on Mars",
    author: "Kelly & Zach Weinersmith",
    date: "February 2nd 2025",
    published: "November 7th 2023",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(aCityOnMars);

export const aLittleHatred: BookReview = {
    cover: "./covers/a_little_hatred.jpg",
    title: "A Little Hatred",
    author: "Joe Abercrombie",
    date: "February 3rd 2025",
    published: "September 17 2019",
    yearReviewed: 2025,
    series: "The Age of Madness",
    content: placeholderReview,
};
reviewLibrary.push(aLittleHatred);

export const battleGround: BookReview = {
    cover: "./covers/battle_ground.jpg",
    title: "Battle Ground",
    author: "Jim Butcher",
    date: "February 4th 2025",
    published: "September 29th 2020",
    yearReviewed: 2025,
    content: placeholderReview,
    series: "The Dresden Files",
};
reviewLibrary.push(battleGround);

export const bestServedCold: BookReview = {
    cover: "./covers/best_served_cold.jpg",
    title: "Best Served Cold",
    author: "Joe Abercrombie",
    date: "February 6th 2025",
    published: "June 1st 2009",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(bestServedCold);

export const bloodRites: BookReview = {
    cover: "./covers/blood_rites.jpg",
    title: "Blood Rites",
    author: "Jim Butcher",
    date: "February 7th 2025",
    published: "August 3rd 2004",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(bloodRites);

export const butter: BookReview = {
    cover: "./covers/butter.jpg",
    title: "Butter",
    author: "Asako Yuzuki",
    date: "February 8th 2025",
    published: "April 21 2017",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(butter);

export const changes: BookReview = {
    cover: "./covers/changes.jpg",
    title: "Changes",
    author: "Jim Butcher",
    date: "February 9th 2025",
    published: "April 6th 2010",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(changes);

export const liesOfLockeLamora: BookReview = {
    cover: "./covers/lies_of_locke_lamora_600x600bb.jpg",
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

export const coldDays: BookReview = {
    cover: "./covers/cold_days.jpg",
    title: "Cold Days",
    author: "Jim Butcher",
    date: "February 10th 2025",
    published: "November 27th 2025",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(coldDays);

export const deadBeat: BookReview = {
    cover: "./covers/dead_beat.jpg",
    title: "Dead Beat",
    author: "Jim Butcher",
    date: "February 11th 2025",
    published: "May 3rd 2005",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(deadBeat);

export const dracula: BookReview = {
    cover: "./covers/dracula.jpg",
    title: "Dracula",
    author: "Bram Stoker",
    date: "February 12th 2025",
    published: "May 26th 1897",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(dracula);

export const dune: BookReview = {
    cover: "./covers/dune.jpg",
    title: "Dune",
    author: "Frank Herbert",
    date: "February 13th 2025",
    published: "June 1st 1965",
    yearReviewed: 2025,
    series: "Dune",
    content: placeholderReview,
};
reviewLibrary.push(dune);

const stormFront: BookReview = {
    cover: "./covers/storm_front_600x600bb.jpg",
    title: "Storm Front",
    author: "Jim Butcher",
    published: "April 1 2000",
    date: "January 24th 2024",
    series: "The Dresden Files",
    yearReviewed: 2024,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(stormFront);

const foolMoon: BookReview = {
    cover: "./covers/fool_moon_600x600bb.jpg",
    title: "Fool Moon",
    author: "Jim Butcher",
    published: "January 1st 2001",
    date: "January 24th 2024",
    series: "The Dresden Files",
    yearReviewed: 2024,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(foolMoon);

const fourthWing: BookReview = {
    cover: "./covers/fourth_wing.jpg",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    date: "February 14th 2025",
    published: "May 2nd 2023",
    yearReviewed: 2025,
    series: "The Empyrean",
    content: placeholderReview,
};
reviewLibrary.push(fourthWing);

const ghostStory: BookReview = {
    cover: "./covers/ghost_story.jpg",
    title: "Ghost Story",
    author: "Jim Butcher",
    date: "February 16th 2025",
    published: "July 26th 2011",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(ghostStory);

const gravePeril: BookReview = {
    cover: "./covers/grave_peril_600x600bb.jpg",
    title: "Grave Peril",
    author: "Jim Butcher",
    published: "September 1st 2001",
    date: "January 24th 2024",
    series: "The Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(gravePeril);

const summerKnight: BookReview = {
    cover: "./covers/summer_knight_600x600bb.jpg",
    title: "Summer Knight",
    author: "Jim Butcher",
    published: "September 3rd 2002",
    date: "January 24th 2024",
    series: "The Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(summerKnight);

const deathMasks: BookReview = {
    cover: "./covers/death_masks_600x600bb.jpg",
    title: "Death Masks",
    author: "Jim Butcher",
    published: "August 5th 2003",
    date: "January 24th 2024",
    series: "The Dresden Files",
    yearReviewed: 2025,
    content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse quis ipsa! Illo aliquam quos rerum enim corporis praesentium nulla fugiat, repudiandae est? Nihil dicta quisquam illo in tempore nam!",
};
reviewLibrary.push(deathMasks);

const hellboyOmnibus1: BookReview = {
    cover: "./covers/hellboy_omnibus_1.jpg",
    title: "Hellboy Omnibus One",
    author: "Mike Mignola",
    date: "February 17th 2025",
    published: "May 9th 2018",
    yearReviewed: 2025,
    series: "Hellboy",
    content: placeholderReview,
};
reviewLibrary.push(hellboyOmnibus1);

const hellboyOmnibus2: BookReview = {
    cover: "./covers/hellboy_omnibus_2.jpg",
    title: "Hellboy Omnibus Two",
    author: "Mike Mignola",
    date: "February 18th 2025",
    published: "June 20th 2018",
    yearReviewed: 2025,
    series: "Hellboy",
    content: placeholderReview,
};
reviewLibrary.push(hellboyOmnibus2);

const hellboyOmnibus3: BookReview = {
    cover: "./covers/hellboy_omnibus_3.jpg",
    title: "Hellboy Omnibus Three",
    author: "Mike Mignola",
    date: "February 17th 2025",
    published: "July 18th 2018",
    yearReviewed: 2025,
    series: "Hellboy",
    content: placeholderReview,
};
reviewLibrary.push(hellboyOmnibus3);

const hellboyOmnibus4: BookReview = {
    cover: "./covers/hellboy_omnibus_4.jpg",
    title: "Hellboy Omnibus Four",
    author: "Mike Mignola",
    date: "February 17th 2025",
    published: "September 5th 2018",
    yearReviewed: 2025,
    series: "Hellboy",
    content: placeholderReview,
};
reviewLibrary.push(hellboyOmnibus4);

const iContainMultitudes: BookReview = {
    cover: "./covers/i_contain_multitudes.jpg",
    title: "I Contain Multitudes",
    author: "Ed Yong",
    date: "February 19th 2025",
    published: "August 9th 2016",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(iContainMultitudes);

const leviathanWakes: BookReview = {
    cover: "./covers/leviathan_wakes.jpg",
    title: "Leviathan Wakes",
    author: "James Corey",
    date: "February 20th 2025",
    published: "June 2nd 2011",
    yearReviewed: 2025,
    series: "The Expanse",
    content: placeholderReview,
};
reviewLibrary.push(leviathanWakes);

const makingItSo: BookReview = {
    cover: "./covers/making_it_so.jpg",
    title: "Making It So",
    author: "Patrick Stewart",
    date: "February 21st 2025",
    published: "October 3rd 2023",
    yearReviewed: 2024,
    content: placeholderReview,
};
reviewLibrary.push(makingItSo);

const oneDarkWindow: BookReview = {
    cover: "./covers/one_dark_window.jpg",
    title: "One Dark Window",
    author: "Rachel Gillig",
    date: "February 22nd 2025",
    published: "September 27th 2022",
    yearReviewed: 2024,
    series: "The Sheperd King",
    content: placeholderReview,
};
reviewLibrary.push(oneDarkWindow);

const pathogenesis: BookReview = {
    cover: "./covers/pathogenesis.jpg",
    title: "Pathogenesis",
    author: "Jonathan Kennedy",
    date: "February 23rd 2025",
    published: "April 18th 2023",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(pathogenesis);

const peaceTalks: BookReview = {
    cover: "./covers/peace_talks.jpg",
    title: "Peace Talks",
    author: "Jim Butcher",
    date: "February 25th 2025",
    published: "July 14th 2020",
    yearReviewed: 2024,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(peaceTalks);

const perdidoStreetStation: BookReview = {
    cover: "./covers/perdido_street_station.jpg",
    title: "Perdido Street Station",
    author: "China Mieville",
    date: "February 26th 2025",
    published: "March 1st 2000",
    yearReviewed: 2025,
    series: "New Crobuzon",
    content: placeholderReview,
};
reviewLibrary.push(perdidoStreetStation);

const piranesi: BookReview = {
    cover: "./covers/piranesi.jpg",
    title: "Piranesi",
    author: "Susanna Clarke",
    date: "February 27th 2025",
    published: "September 15th 2000",
    yearReviewed: 2024,
    content: placeholderReview,
};
reviewLibrary.push(piranesi);

const provenGuilty: BookReview = {
    cover: "./covers/proven_guilty.jpg",
    title: "Proven Guilty",
    author: "Jim Butcher",
    date: "March 1st 2025",
    published: "February 1st 2006",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(provenGuilty);

const redSeasUnderRedSkies: BookReview = {
    cover: "./covers/red_seas_under_red_skies.jpg",
    title: "Red Seas Under Red Skies",
    author: "Scott Lynch",
    date: "March 2nd 2025",
    published: "June 21st 2007",
    yearReviewed: 2025,
    series: "The Gentleman Bastards",
    content: placeholderReview,
};
reviewLibrary.push(redSeasUnderRedSkies);

const skinGame: BookReview = {
    cover: "./covers/skin_game.jpg",
    title: "Skin Game",
    author: "Jim Butcher",
    date: "March 5th 2025",
    published: "May 27 2014",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(skinGame);

const smallFavor: BookReview = {
    cover: "./covers/small_favor.jpg",
    title: "Small Favor",
    author: "Jim Butcher",
    date: "March 6th 2025",
    published: "April 1st 2008",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(smallFavor);

const solutionsAndOtherProblems: BookReview = {
    cover: "./covers/solutions_and_other_problems.jpg",
    title: "Solutions and Other Problems",
    author: "Allie Brosh",
    date: "March 7th 2025",
    published: "September 22nd 2020",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(solutionsAndOtherProblems);

const soonish: BookReview = {
    cover: "./covers/soonish.jpg",
    title: "Soonish",
    author: "Kelly & Zach Weinersmith",
    date: "Marth 10th 2025",
    published: "October 17th 2017",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(soonish);

const theBladeItself: BookReview = {
    cover: "./covers/the_blade_itself.jpg",
    title: "The Blade Itself",
    author: "Joe Abercrombie",
    date: "March 16th 2025",
    published: "May 4th 2006",
    yearReviewed: 2025,
    series: "The First Law",
    content: placeholderReview,
};
reviewLibrary.push(theBladeItself);

const theBrightSword: BookReview = {
    cover: "./covers/the_bright_sword.jpg",
    title: "The Bright Sword",
    author: "Lev Grossman",
    date: "March 20th 2025",
    published: "July 16th 2024",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(theBrightSword);

const theLastGraduate: BookReview = {
    cover: "./covers/the_last_graduate.jpg",
    title: "The Last Graduate",
    author: "Naomi Novik",
    date: "March 21st 2025",
    published: "September 28th 2021",
    yearReviewed: 2025,
    series: "The Scholomance",
    content: placeholderReview,
};
reviewLibrary.push(theLastGraduate);

const theMartian: BookReview = {
    cover: "./covers/the_martian.jpg",
    title: "The Martian",
    author: "Andy Weir",
    date: "March 17th 2025",
    published: "September 27th 2011",
    yearReviewed: 2024,
    content: placeholderReview,
};
reviewLibrary.push(theMartian);

const theTroubleWithPeace: BookReview = {
    cover: "./covers/the_trouble_with_peace.jpg",
    title: "The Trouble With Peace",
    author: "Joe Abercrombie",
    date: "April 1st 2025",
    published: "September 15th 2020",
    yearReviewed: 2025,
    series: "The Age of Madness",
    content: placeholderReview,
};
reviewLibrary.push(theTroubleWithPeace);

const theWillOfTheMany: BookReview = {
    cover: "./covers/the_will_of_the_many.jpg",
    title: "The Will of The Many",
    author: "James Islington",
    date: "April 2nd 2025",
    published: "May 23rd 2023",
    yearReviewed: 2025,
    series: "Hierarchy",
    content: placeholderReview,
};
reviewLibrary.push(theWillOfTheMany);

const tigana: BookReview = {
    cover: "./covers/tigana.jpg",
    title: "Tigana",
    author: "Guy Gavriel Kay",
    date: "April 4th 2025",
    published: "August 1st 1990",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(tigana);

const turnCoat: BookReview = {
    cover: "./covers/turn_coat.jpg",
    title: "Turn Coat",
    author: "Jim Butcher",
    date: "April 7th 2025",
    published: "April 7th 2009",
    yearReviewed: 2025,
    series: "The Dresden Files",
    content: placeholderReview,
};
reviewLibrary.push(turnCoat);

const underHeaven: BookReview = {
    cover: "./covers/under_heaven.jpg",
    title: "Under Heaven",
    author: "Guy Gavriel Kay",
    date: "April 12th 2025",
    published: "April 27th 2010",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(underHeaven);

const whiteNight: BookReview = {
    cover: "./covers/white_night.jpg",
    title: "White Night",
    author: "Jim Butcher",
    date: "April 20th 2025",
    published: "April 3rd 2007",
    yearReviewed: 2025,
    content: placeholderReview,
};
reviewLibrary.push(whiteNight);

export default reviewLibrary;
