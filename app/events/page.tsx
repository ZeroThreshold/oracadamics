import Breadcrumbs from "@/components/BreadCrumb";

const breadcrumbsInfo = {
  title: "EVENTS",
  menus: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Booking",
      link: "",
    },
  ],
};

export default async function Events() {
  return (
    <div className="w-full text-center">
      <Breadcrumbs data={breadcrumbsInfo} />
      <div className="bg-whtie dark:bg-gray-800">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Coming Soon!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Our website is under construction. We'll be back soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
