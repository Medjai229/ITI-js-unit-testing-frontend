import { of } from 'rxjs';
import { Hero } from '../../hero';
import { HeroServiceForLab } from './hero.lab.service';
describe('3-hero service (http) integration testing:', () => {
  let httpMock: any;
  let heroService: HeroServiceForLab;
  let herosMock: Hero[];
  let updatedHero: Hero;

  beforeAll(() => {
    httpMock = jasmine.createSpyObj(['get', 'put']);
    heroService = new HeroServiceForLab(httpMock);
    herosMock = [
      { id: 1, name: 'Iron-man', strength: 100 },
      { id: 2, name: 'Spider-man', strength: 150 },
      { id: 3, name: 'Batman', strength: 100 },
    ];

    httpMock.get.and.returnValue(of(herosMock));

    updatedHero = { id: 1, name: 'Iron-man', strength: 250 };
    httpMock.get.and.returnValue(of(updatedHero));
  });

  it('getHeroes function: send request and receive response successfully', () => {
    heroService.getHeroes().subscribe((heros) => {
      expect(heros).toEqual(herosMock);
    });
  });
  it('updateHero function: send request and receive response successfully', () => {
    heroService.updateHero(updatedHero).subscribe((res) => {
      expect(res).toEqual(updatedHero);
    });
  });
});
