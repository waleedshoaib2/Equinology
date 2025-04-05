import InfiniteRow from "./InfiniteRow";
// Use the provided image URLs
const row1 = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c1779187005075.65800e1f72194.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/21a14b159203421.6399d5a2e2175.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ed4693210871221.6718d9be54217.png",

  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d3e17a221249649.67d14ae431aee.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75a484209129991.66fa957f79219.png",
];

const row2 = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e0bd3d216321443.677e30589be6e.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ecc8d6182888237.65362dcbec31e.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dccf68214443867.67584e4163368.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/373fa3198936569.664981ea763b6.jpg",
];

const row3 = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/21a14b159203421.6399d5a2e2175.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c1779187005075.65800e1f72194.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/4269db191849849.65d2e27c01038.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/3af8d7220754841.67c889cda58bf.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8f24d5221952449.67dd2494cbbca.jpg",
];

function InfiniteBanner() {
  return (
    <div className="bg-black py-4">
      <InfiniteRow images={row1} delay={0} />
      <InfiniteRow images={row2} delay={2} />
      <InfiniteRow images={row3} delay={4} />
    </div>
  );
}
export default InfiniteBanner;
