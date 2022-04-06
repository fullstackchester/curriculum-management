import { IoBarChart, IoSchool, IoPeople, IoFileTray, IoBook } from 'react-icons/io5';
export const SidebarData = [
    {
        title: 'Dashboard',
        icon: <IoBarChart />,
        link: 'dashboard',
    },
    {
        title: 'Curriclum',
        icon: <IoSchool />,
        link: 'curriculum',
    },
    {
        title: 'Faculty',
        icon: <IoPeople />,
        link: '/faculty',
    },
    {
        title: 'Files',
        icon: <IoFileTray />,
        link: '/files',
    },
    {
        title: 'Subjects',
        icon: <IoBook />,
        link: '/subject',
    },
]