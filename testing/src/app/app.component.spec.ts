import { TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render a title saying 'bienvenido a mi tienda'" ,()=>{
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.getElementsByTagName('h1')[0]?.textContent).toContain('bienvenido a mi tienda')
  })

  it("should render a button with title 'pulsame'",()=>{
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.getElementsByTagName('button')[0]?.textContent).toContain('pulsame')
  })

  it("deberia renderizar un texto que diga 'la luz esta encendida' al entrar a la web",()=>{
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.mensaje')?.textContent).toContain('la luz esta encendida')
  })

  it("deberia renderizar un texto que diga 'la luz esta apagada' pulsar el boton por primera vez",()=>{
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const app = fixture.componentInstance;
    app.click()
    expect(app.msg).toBe("la luz esta apagada")
  })

  it("deberia renderizar un texto que diga 'la luz esta encendida' y luego al pulsar, deberia decir 'la luz esta apagada'",()=>{
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const app = fixture.componentInstance;
    expect(app.msg).toBe("la luz esta encendida")
    app.click()
    expect(app.msg).toBe("la luz esta apagada")
    app.click()
    expect(app.msg).toBe("la luz esta encendida")
    app.click()
    expect(app.msg).toBe("la luz esta apagada")

  })

  // it(`should have as title 'testing'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('testing');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('testing app is running!');
  // });
});
