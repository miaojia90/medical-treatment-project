/**
 * @file
 * Created by major on 17/12/29.
 */
const userCenter = r => require(['views/userPage/userCenter'], r);
const userInfo = r => require(['views/userPage/userInfo'], r);
const healthRecords = r => require(['views/userPage/healthRecords'], r);
const userEdit = r => require(['views/userPage/userEdit'], r);
const otherUserCard = r => require(['views/userPage/otherUserCard'], r);
const NotFound = r => require(['views/notfound'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [{
	path: '/',
	redirect: {
		name: 'userCenter'
	}
}, {
	path: '/userCenter/:userId?',
	component: userCenter,
	name: 'userCenter'
}, {
	path: '/userInfo/:userId?',
	component: userInfo,
	name: 'userInfo'
}, {
	path: '/healthRecords/:userId?',
	component: healthRecords,
	name: 'healthRecords'
}, {
	path: '/userEdit/:userId?',
	component: userEdit,
	name: 'userEdit'
}, {
	path: '/otherUserCard/:userId?',
	component: otherUserCard,
	name: 'otherUserCard'
}].map(route => {
	route.path = rootPath + route.path;
	return route;
});

// 404 页
routes.push({
	path: '*',
	component: NotFound,
	name: 'notfound'
});

export default routes;