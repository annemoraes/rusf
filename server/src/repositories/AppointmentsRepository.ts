import Appoitment from '../models/Appointments';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Appoitment)
class AppointmentsRepository extends Repository<Appoitment>{
  public async findByDate(date: Date): Promise<Appoitment | null> {
    const findAppointment = await this.findOne({
      where: { date }
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
