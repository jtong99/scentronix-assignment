import type { WebServers } from "@/api/web-servers/webServersModel";

export const webServers: WebServers[] = [

  {
    id: 1,
    url: "https://does-not-work.perfume.new",
    priority: 1
  },
  {
    id: 2,
    url: "https://gitlab.com",
    priority: 4
  },
  {
    id: 3,
    url: "http://app.scnt.me",
    priority: 3
  },
  {
    id: 4,
    url: "https://offline.scentronix.com",
    priority: 2
  }

];

export class webServersRepository {
  async findAllAsync(): Promise<WebServers[]> {
    return webServers;
  }

  // async findByIdAsync(id: number): Promise<User | null> {
  //   return users.find((user) => user.id === id) || null;
  // }
}
