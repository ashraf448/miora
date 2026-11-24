export const contentTabs = [
  {
    id: "articles",
    label: "مقالات",
    heading: "المقالات التوعوية",
    searchLabel: "ابحث في المقالات",
    nouns: ["مقال", "مقالان", "مقالات", "مقالًا"],
    none: "لا توجد مقالات مطابقة.",
    reset: "عرض كل المقالات",
  },
  {
    id: "videos",
    label: "فيديوهات",
    heading: "الفيديوهات التوعوية",
    searchLabel: "ابحث في الفيديوهات",
    nouns: ["فيديو", "فيديوهان", "فيديوهات", "فيديو"],
    none: "لا توجد فيديوهات مطابقة.",
    reset: "عرض كل الفيديوهات",
    note: "الفيديوهات تعبّر عن رأي أصحابها وتُعرض هنا للتوعية، ولا تغني عن استشارة متخصص.",
  },
  {
    id: "podcasts",
    label: "بودكاست",
    heading: "حلقات البودكاست",
    searchLabel: "ابحث في البودكاست",
    nouns: ["حلقة", "حلقتان", "حلقات", "حلقة"],
    none: "لا توجد حلقات مطابقة.",
    reset: "عرض كل الحلقات",
    note: "الحلقات تعبّر عن رأي أصحابها وتُعرض هنا للتوعية، ولا تغني عن استشارة متخصص.",
  },
];

export function countText(total, [one, two, few, many]) {
  if (total === 1) return `1 ${one}`;
  if (total === 2) return two;
  return `${total} ${total > 10 ? many : few}`;
}
