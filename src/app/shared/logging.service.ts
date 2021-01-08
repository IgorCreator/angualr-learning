export class LoggingService {
  statusChange(status: string) {
    console.log(`An account status changed, new status: ${status}`);
  }
}
