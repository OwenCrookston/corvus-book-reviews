type BookTile = {
    cover: string;
    title: string;
    author: string;
    date: string;
    published: string;
    series?: string;
};

type BookReview = BookTile & {
    content: string;
};
