export const GA_TRACKING_ID = "91628183";

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  if (!GA_TRACKING_ID) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value: value,
  });
};
