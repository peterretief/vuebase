
import Home from './components/home/Home.vue';
import Customers from './components/customers/Customers.vue';
import Inventory from './components/inventory/Inventory.vue';
import Assets from './components/assets/Assets.vue';
//import Grids from './components/grids/Grids.vue';
import Rentals from './components/rentals/Rentals.vue';
import Contacts from './components/contacts/Contacts.vue';
//import Modals from './components/modal_template/List1.vue';
import Events from './components/events/Events.vue';

export const routes = [
{ path: '/', component: Home, name: 'home' },
{ path: '/customers', component: Customers },
{ path: '/inventory', component: Inventory },
{ path: '/assets', component: Assets },
{ path: '/rentals', component: Rentals },
{ path: '/contacts', component: Contacts },
{ path: '/events', component: Events }
//{ path: '/grids', component: Grids }
];
