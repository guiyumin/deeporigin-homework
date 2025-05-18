import { faker } from "@faker-js/faker";

const USERS = Array.from({ length: 20 }).map(() => ({
  id: faker.string.nanoid(10),
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
}));

export const TASKS = Array.from({ length: 50 }).map((_, i) => ({
  id: faker.number.int({ min: 1, max: 1000000 }),
  plasmid: `p${faker.string.uuid()}`,
  volume: faker.number.int({ min: 1, max: 500 }),
  assignees: faker.helpers.arrayElements(
    USERS,
    faker.number.int({ min: 1, max: 3 })
  ),
  lastModified: faker.date.recent().getTime(),
}));
