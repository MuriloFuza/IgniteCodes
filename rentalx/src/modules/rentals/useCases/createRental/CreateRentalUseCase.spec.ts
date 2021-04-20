import dayjs from 'dayjs';

import { CarRepositoryInMemory } from '@modules/cars/Repositories/in-memory/CarRepositoryInMemory';
import { RentalRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalRepositoryInMemory';
import { DaysJsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayJsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalRepositoryInMemory;
let carRepositoryInMemory: CarRepositoryInMemory;
let dayJsProvider: DaysJsDateProvider;

describe('Criar um aluguel', () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate();
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalRepositoryInMemory();
    carRepositoryInMemory = new CarRepositoryInMemory();
    dayJsProvider = new DaysJsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayJsProvider,
      carRepositoryInMemory,
    );
  });

  it('Deve ser possível criar um novo aluguel', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '12345',
      car_id: '121212',
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  });

  it('Não deve ser possível criar um novo aluguel se já existe algum em aberto para o mesmo usuário', async () => {
    expect(async () => {
      const rental = await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expected_return_date: dayAdd24Hours,
      });

      const rental2 = await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '1212125',
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Não deve ser possível criar um novo aluguel se já existe algum em aberto para o mesmo carro', async () => {
    expect(async () => {
      const rental = await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expected_return_date: dayAdd24Hours,
      });

      const rental2 = await createRentalUseCase.execute({
        user_id: '12346',
        car_id: '121212',
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Não deve ser possível criar um novo aluguel com duranção menor que 24 horas', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '12345',
        car_id: '121212',
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
