I added an `Authorization` for access control a different dashboards. So you just pass the component, and the allowed role to the Authorization HOC.I assume your user has a property `userType`.

- Super admin is able to access the all dashboards.
- Admin is able to access Admin, Organizer and User dashboards.
- Organizer is able to access Organzer and User dashboards.
- User is able to access only User dashboard.

[https://nemersahli.github.io/React-route-admin-user/](https://nemersahli.github.io/React-route-admin-user/)
