interface IEvent {}

interface ISimpleEvent extends IEvent {}

interface IComplexEvent extends IEvent {
  cmp: Function;
  num: number;
}

class T implements ISimpleEvent {}

class D implements IComplexEvent {
  cmp = function () {};
  num = 1;
}

function checkType<T>(obj: unknown, props: string[] = []): obj is T {
  if (props.length === 0) {
    return false;
  }
  console.log(Object.prototype.hasOwnProperty.call(obj, props[0]));
  for (let i = 0; i < props.length; i += 1) {
    if (false === Object.prototype.hasOwnProperty.call(obj, props[i])) {
      return false;
    }
  }
  return true;
}

function processEvent(event: IEvent) {
  // if (event instanceof IComplexEvent) {} // ERROR: 'IComplexEvent' only refers to a type, but is being used as a value here.
  // console.log(event instanceof D); // true

  if (checkType<IComplexEvent>(event, ['cmp', 'num'])) {
    console.log('IComplexEvent');
  }
}

const complexEventD = new D();
processEvent(complexEventD);
