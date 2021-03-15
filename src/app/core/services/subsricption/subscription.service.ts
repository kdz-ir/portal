import { Injectable } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import { remove } from 'lodash-es';

@Injectable()
export class SubscriptionService
{

  private readonly subs = new Set<Subscription>();


  subscribe<T>(
    obseravble: Observable<T>,
    nextCallBack?: (next: T) => void,
    errorCallBack?: (error: any) => void,
    completeCallBack?: () => void
  ): Subscription
  {
    const sub = obseravble.subscribe(
      nextCallBack,
      errorCallBack,
      completeCallBack
    );
    this.subs.add(sub);
    return sub;
  }

  storeSubscription(subscription: Subscription): void
  {
    this.subs.add(subscription);
  }

  unsubscribeAll(): void
  {
    this.subs.forEach(s => s?.unsubscribe());
    this.subs.clear();
  }

  unsubscribe(subscription: Subscription)
  {
    this.subs.delete(subscription);
    subscription?.unsubscribe();
  }
}
