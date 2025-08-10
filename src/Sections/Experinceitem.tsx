// import React from "react";

// interface Props {
//   title: string;
//   company: string;
//   description: string;
//   link?: string;
//   date: string;
// }

// const ExperienceItem: React.FC<Props> = ({
//   title,
//   company,
//   description,
//   link,
//   date,
// }) => {
//   return (
//     <div
//       className="relative mx-12 pb-12 grid md:grid-cols-5 md:gap-10 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-['']"
//     >
//       <div className="pb-12 md:col-span-2">
//         <div className="sticky top-0">
//           <span
//             className="absolute -left-[42px] text-5xl text-mint-400 rounded-full drop-shadow-[0px_0px_8px_rgba(0,255,94,1)]"
//             aria-hidden="true"
//           >
//             &bull;
//           </span>
//           <h3 className="text-xl font-bold text-mint-400" id={`experience-title-${title}`}>
//             {title}
//           </h3>
//           <h4 className="text-xl font-semibold text-zinc-600 dark:text-white">
//             {company}
//           </h4>
//           <time dateTime={date} className="text-sm text-zinc-600/80 dark:text-white/80">
//             {date}
//           </time>
//         </div>
//       </div>
//       <div className="flex flex-col gap-2 pb-4 text-zinc-00 dark:text-zinc-300 md:col-span-3 whitespace-pre-wrap">
//         {description}
//       </div>
//     </div>
//   );
// };

// export default ExperienceItem;
import React from "react";

interface Props {
  title: string;
  company: string;
  description: string;
  link?: string;
  date: string;
}

const ExperienceItem: React.FC<Props> = ({
  title,
  company,
  description,
  link,
  date,
}) => {
  return (
    <div
      className="relative mx-12 pb-12 grid md:grid-cols-5 md:gap-10 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-['']"
    >
      <div className="pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span
            className="absolute -left-[42px] text-5xl text-sky-400 rounded-full drop-shadow-[0px_0px_8px_rgba(56,189,248,1)]"
            aria-hidden="true"
          >
            &bull;
          </span>
          <h3 className="text-xl font-bold text-sky-400" id={`experience-title-${title}`}>
            {title}
          </h3>
          <h4 className="text-xl font-semibold text-zinc-600 dark:text-white">
            {company}
          </h4>
          <time dateTime={date} className="text-sm text-zinc-600/80 dark:text-white/80">
            {date}
          </time>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-4 text-zinc-00 dark:text-zinc-300 md:col-span-3 whitespace-pre-wrap">
        {description}
      </div>
    </div>
  );
};

export default ExperienceItem;