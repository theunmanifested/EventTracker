
export class ParkVisit {

    id: number;
    parkName: string;
    active: boolean;
    length: number;
    date: string;
    mainActivity: string;
    logVisit: string;
    city: string;
    county: string;
    waterActivity: boolean;
    firstTimeVisit: boolean;
    imageUrl: string;
    bestSeason: number;
    createdAt: string;
    lastUpdated: string;

    constructor(
      id?: number, parkName?: string, active?: boolean, length?: number,
      date?: string, mainActivity?: string, logVisit?: string, city?: string,
      county?: string, waterActivity?: boolean, firstTimeVisit?: boolean,
      imageUrl?: string, bestSeason?: number, createdAt?: string, lastUpdated?: string
    ) {
      this.id = id;
      this.parkName = parkName;
      this.active = active;
      this.length = length;
      this.date = date;
      this.mainActivity = mainActivity;
      this.logVisit = logVisit;
      this.city = city;
      this.waterActivity = waterActivity;
      this.imageUrl = imageUrl;
      this.bestSeason = bestSeason;
      this.createdAt = createdAt;
      this.lastUpdated = lastUpdated;
    }

     // TODO constructor... with all params optional ?
  // constructor(
  //   id?: number,
  //   username?: string,
  //   email?: string,
  //   password?: string
  // ) {
  //   this.id = id;
  //   this.username = username;
  //   this.email = email;
  //   this.password = password;
  // }
}
