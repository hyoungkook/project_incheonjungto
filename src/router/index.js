import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/index.vue';      
import Members from '@/pages/members/index.vue';
import BuddhistCeremony from '@/pages/buddhistceremony/index.vue';
import PrayerUnification from '@/pages/prayerunification/index.vue';
import Meditation from '@/pages/meditation/index.vue';
import JointPrayer from '@/pages/jointprayer/index.vue';
import Donation from '@/pages/donation/index.vue';
import Meeting from '@/pages/meeting/index.vue';
import PrayerCeremony from '@/pages/prayerceremony/index.vue';
import RighteousArmy from '@/pages/righteousarmy/index.vue';
import Practice from '@/pages/practice/index.vue';
import NewMember from '@/pages/newmember/index.vue';
import Wow from '@/pages/wow/index.vue';

const router = createRouter  ({
    history: createWebHistory(),
    routes: [
        {                 
            path:'/',     
            name:'Home',  
            component:Home 
        },    
        {
            path:'/members',
            name:'Members',
            component:Members
        },
        {
            path:'/buddhistceremony',
            name:'BuddhistCeremony',
            component:BuddhistCeremony
        },
        {
            path:'/prayerunification',
            name:'PrayerUnification',
            component:PrayerUnification
        },
        {
            path:'/meditation',
            name:'Meditation',
            component:Meditation
        },
        {
            path:'/jointprayer',
            name:'JointPrayer',
            component:JointPrayer
        },
        {
            path:'/donation',
            name:'Donation',
            component:Donation
        },
        {
            path:'/meeting',
            name:'Meeting',
            component:Meeting
        },
        {
            path:'/prayerceremony',
            name:'PrayerCeremony',
            component:PrayerCeremony
        },
        {
            path:'/righteousarmy',
            name:'RighteousArmy',
            component:RighteousArmy
        },
        {
            path:'/practice',
            name:'Practice',
            component:Practice
        },
        {
            path:'/newmember',
            name:'NewMember',
            component:NewMember
        },
        {
            path:'/wow',
            name:'Wow',
            component:Wow
        }

    ]
});

export default router;   