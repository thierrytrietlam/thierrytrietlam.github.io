export type Review = {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar?: string; // optional square image under /public/img
  linkedin?: string;
};

// No reviews are published yet. The Reviews section auto hides while this list
// is empty, so the site never shows a placeholder testimonial.
//
// To add one, copy the shape below into the array and fill real values.
// Reuse your LinkedIn recommendations where you have them.
//
//   {
//     quote: "Two or three specific sentences that point to a concrete result.",
//     name: "Full Name",
//     title: "Their role",
//     company: "Company",
//     avatar: "/img/review-1.jpg",
//     linkedin: "https://www.linkedin.com/in/...",
//   },
export const reviews: Review[] = [];
