import Breadcrumbs from "@/components/BreadCrumb";


const breadcrumbsInfo = {
    title: "EVENTS",
    menus: [{
        name: "Home",
        link: "/"
    }, {
        name: "My Booking",
        link: ""
    }]
}

export default async function Events() {
    return (
        <div className="w-full text-center">
            <Breadcrumbs data={breadcrumbsInfo} />
            <h1 className='p-8 py-40 text-4xl font-extrabold mb-5 uppercase'>Coming Soon...!</h1>
        </div>
    );
}