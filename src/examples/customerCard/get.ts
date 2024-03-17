/**
 * Mercado Pago Customer card get.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/cards/_customers_customer_id_cards_id/get Documentation }.
 */
import MercadoPago, { CustomerCard } from '@src/index';

const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>' });
const customerClient = new CustomerCard(client);

customerClient.get({ customerId: '<CUSTOMER_ID>', cardId : '<CARD_ID>' }).then(console.log).catch(console.log);
