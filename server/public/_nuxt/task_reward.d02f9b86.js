function e(){return $request.get({url:"/share/task"})}function t(){return $request.get({url:"/share/share"})}function s(){return $request.post({url:"/share/sign"})}function u(r){return $request.get({url:"/squareCategory/lists",params:r})}function a(r){return $request.post({url:"/draw.DrawSquare/add",params:r})}function n(r){return $request.post({url:"/MusicSquare/add",params:r})}function o(r){return $request.post({url:"/VideoSquare/add",params:r})}function i(){return $request.get({url:"/kb.robot/categoryLists"})}function g(r){return $request.post({url:"/kb.robot/share",params:r})}export{u as a,a as b,n as c,e as d,t as e,s as f,i as g,o as h,g as s};
